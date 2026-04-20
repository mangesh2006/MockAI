export async function apiFetch(url: string, options: RequestInit = {}) {
  let response = await fetch(url, {
    ...options,
    credentials: "include",
  });

  if (response.status === 401) {
    const refreshResponse = await fetch("/api/v1/auth/refresh", {
      method: "POST",
      credentials: "include",
    });

    if (refreshResponse.ok) {
      response = await fetch(url, {
        ...options,
        credentials: "include",
      });
    }
  }

  return response;
}
