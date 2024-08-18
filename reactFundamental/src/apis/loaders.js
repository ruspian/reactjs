// fungsi loader untuk mengambil data
export const data = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}


// fungsi loader untuk mengambil data berdasarkan id
export const dataById = ({params}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
} 