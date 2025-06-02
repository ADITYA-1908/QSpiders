import { useFetch } from "./Hooks/useFetch";

const CustomHooks = () => {
  const [loading, error, data] = useFetch("https://fakestoreapi.com/products");
  console.log(data);

  return (
    <>
      <table>
        <thead>
          <th>
            <td>ID</td>
            <td>Tittle</td>
            <td>Category</td>
          </th>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomHooks;
