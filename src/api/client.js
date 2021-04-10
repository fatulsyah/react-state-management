import axios from "axios";

export function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { "Content-Type": "application/json" };

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return axios({
    url: endpoint,
    ...config,
  }).then((data) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: data.data }), 7000)
    );
  }).catch((err) => {
    return Promise.reject(err);
  });
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: "GET" });
};

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body });
};
