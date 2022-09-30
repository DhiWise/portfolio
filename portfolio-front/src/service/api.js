import { apis } from "service";

const API_URLS = {
  blogs: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@salonii13`,
  GET_EXPERIENCE: `http://localhost:8081/experience`,
  GET_EDUCATION: `http://localhost:8081/education`,
  GET_SERVICES: `http://localhost:8081/services`,
  GET_CATEGORIES: `http://localhost:8081/categories`,
  GET_SITES: `http://localhost:8081/sites`,
};

export const getSites = (payload) => {
  if(payload?.path?.id){
    return apis.get(`${API_URLS.GET_SITES}/${payload.path.id}`, payload);
  }
  else {
    return apis.get(`${API_URLS.GET_SITES}`, payload);
  }
}

export const blogs = (payload) =>
  apis.get(API_URLS.blogs, {
    ...payload,
    params: {
      rss_url: "https://medium.com/feed/@salonii13",
      ...payload?.params,
    },
  });

export const getExperience = (payload) =>
  apis.get(API_URLS.GET_EXPERIENCE, payload);

export const getEducation = (payload) =>
  apis.get(API_URLS.GET_EDUCATION, payload);

export const getServices = (payload) =>
  apis.get(API_URLS.GET_SERVICES, payload);

export const getCategories = (payload) =>
  apis.get(API_URLS.GET_CATEGORIES, payload);
