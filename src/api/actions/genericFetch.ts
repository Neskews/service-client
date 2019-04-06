export function genericFetch<T>(url: string, method: string): Promise<T> {
  return fetch(url, { method }).then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  });
}
