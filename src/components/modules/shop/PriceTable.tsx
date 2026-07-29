import SectionTitle from "@/components/ui/SectionTitle";
import { Product } from "@/types";
const PriceTable = ({
  products,
  title,
  tableTitle,
}: {
  products: Product[];
  title: string;
  tableTitle: string;
}) => {
  return (
    <div className="w-full px-6 py-10">
      <SectionTitle title={title} />
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className=" text-base-content">
              <th>{tableTitle} Clothing</th>
              <th>Best Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products?.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
