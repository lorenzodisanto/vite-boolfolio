import { reactive } from "vue";

export const api = {
  url: "http://127.0.0.1:8000/api/",
};

export const store = reactive({
  // conservo i dati nello store
  projects: [],
  pageLinks: [],
});
