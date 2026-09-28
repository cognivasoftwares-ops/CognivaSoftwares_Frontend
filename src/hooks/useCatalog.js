import { useEffect, useState } from 'react';
import { fetchServices, fetchProjects } from '../api/cogniva';
import { services as staticServices } from '../data/services';
import { projects as staticProjects } from '../data/projects';

/*
 * Services & projects come from the backend API.
 * The static files in src/data are used as an instant first paint and as a
 * fallback if the API is unreachable, so the site never renders empty.
 * Results are cached for the session so the Footer and pages share one request.
 */
const cache = {};
const inflight = {};

function load(key, fetcher, fallback) {
  if (!inflight[key]) {
    inflight[key] = fetcher()
      .then((data) => (Array.isArray(data) && data.length > 0 ? data : fallback))
      .catch(() => fallback)
      .then((data) => {
        cache[key] = data;
        return data;
      });
  }
  return inflight[key];
}

function useCatalogList(key, fetcher, fallback) {
  const [data, setData] = useState(() => cache[key] || fallback);
  const [loading, setLoading] = useState(() => !cache[key]);

  useEffect(() => {
    if (cache[key]) return undefined;
    let active = true;
    load(key, fetcher, fallback).then((result) => {
      if (active) {
        setData(result);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, [key, fetcher, fallback]);

  return { data, loading };
}

export function useServices() {
  const { data, loading } = useCatalogList('services', fetchServices, staticServices);
  return { services: data, loading };
}

export function useProjects() {
  const { data, loading } = useCatalogList('projects', fetchProjects, staticProjects);
  return { projects: data, loading };
}
