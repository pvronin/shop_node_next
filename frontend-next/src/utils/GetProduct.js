export default async function GetProduct(id) {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

    const res = await fetch(`${apiUrl}/api/products/${id}/`, {
        next: {
            revalidate: 3600
        },
    });


    if (!res.ok) return null;
    return res.json();
}
