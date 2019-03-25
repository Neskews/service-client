export function genericFetch<T>(url: string, method: string): Promise<T> {
  return fetch(url, { method }).then(response => {
    console.log(response);

    if (!response.ok) {
      console.log(response);

      throw new Error(response.statusText);
    }
    return response.json();
  });
}
