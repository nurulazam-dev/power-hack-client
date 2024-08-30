import DeleteBillModal from "./DeleteBillModal";
import UpdateBillModal from "./UpdateBillModal";

// const BillingsTable = ({ bill, setDeleteBill }) => {
const BillingsTable = (props) => {
  console.log(props.bill);
  const data = props.bill;
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data?.username}</td>
      {/* <td>{data.amount}</td> */}
      <td className="flex justify-center">
        <div className="mx-2">
          <UpdateBillModal />
          <label
            htmlFor="bill-update-modal"
            className="btn btn-outline btn-success btn-xs"
          >
            Edit
          </label>
        </div>
        <div className="mx-2">
          <DeleteBillModal />
          <label
            // onClick={() => setDeleteBill(bill)}
            htmlFor="bill-delete-modal"
            className="btn btn-outline btn-error btn-xs"
          >
            Delete
          </label>
        </div>
      </td>
    </tr>
  );
};

export default BillingsTable;
