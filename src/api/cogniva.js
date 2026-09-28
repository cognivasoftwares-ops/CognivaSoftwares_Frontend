import apiClient from './client';

export async function fetchServices() {
  const { data } = await apiClient.get('/services');
  return data;
}

export async function fetchProjects() {
  const { data } = await apiClient.get('/projects');
  return data;
}

/**
 * @param {{fullName:string,email:string,phone?:string,company?:string,projectType:string,message:string,website?:string}} payload
 */
export async function submitContactEnquiry(payload) {
  const { data } = await apiClient.post('/contact', payload);
  return data;
}
