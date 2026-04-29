

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

export default async function GetProducts(queries) {
    const res = await fetch(`${apiUrl}/api/products/?${queries}`)
    if (!res.ok) return [];
    const data = await res.json();
    return data;
}
