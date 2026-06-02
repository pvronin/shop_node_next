const GetCategories = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

    const res = await fetch(`${apiUrl}/api/products/categories`, {
        next: {
            revalidate: 33
        }
    })
    return res.json();
}

export default GetCategories;
