import DeleteBillModal from "../DeleteBillModal";
import UpdateBillModal from "../UpdateBillModal";

// const BillingsTable = ({ bill, setDeleteBill }) => {
const BillingsTable = (props) => {
  const { _id, name, email, phone, amount } = props.bill;

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{amount}</td>
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
