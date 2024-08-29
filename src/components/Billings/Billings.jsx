import axios from "axios";
import { useEffect, useState } from "react";
import url from "../../assets/data/billsData.json";
// import BillingsTable from "./BillingsTable";

const Billings = () => {
  const [bills, setBills] = useState([]);
  console.log(bills);

  /* useEffect(() => {
    fetch(url)
      // fetch('data.json')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []); */

  useEffect(() => {
    axios.get(url).then((res) => {
      setBills(res.data);
    });
  }, []);

  return (
    <section className="pt-6 mt-10 bg-white overflow-x-auto">
      <div className="border bg-violet-600 my-4 rounded flex justify-between w-10/12 mx-auto  px-7 py-2">
        <div className="flex items-center">
          <h2 className="font-semibold text-2xl text-white">Billings</h2>
          <input
            type="text"
            placeholder="Search"
            className="input bg-white input-bordered mx-3 w-full max-w-xs"
          />
        </div>
        <div className="">
          {/* <AddBillModal /> */}
          <label
            htmlFor="bill-add-modal"
            className="btn text-[15px] text-white border-none hover:bg-green-700"
          >
            Add New Bill
          </label>
        </div>
      </div>

      <table className="table table-compact text-center text-black w-10/12 mx-auto">
        <thead>
          <tr className="text-black font-bold text-[16px]">
            <th>Billing ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {bills?.map((bill) => (
            // <Table key={bill?.index} bill={bill} setDeleteBill={setDeleteBill} />
            <BillingsTable key={bill?.index} bill={bill} />
          ))} */}

          {bills?.map((bill) => (
            <tr key={bill?.index}>
              <td>{bill?.index}</td>
              <td>{bill?.name}</td>
              <td>{bill?.email}</td>
              <td>{bill?.phone}</td>
              <td>{bill?.amount}</td>
              <td className="flex justify-center">
                <div className="mx-2">
                  {/* <UpdateBillModal /> */}
                  <label
                    htmlFor="bill-update-modal"
                    className="btn btn-outline btn-success btn-xs"
                  >
                    Edit
                  </label>
                </div>
                <div className="mx-2">
                  {/* <DeleteBillModal /> */}
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
          ))}
        </tbody>
      </table>
      {/* {deleteBill && (
          <DeleteBillModal
            deleteBill={deleteBill}
            setDeleteBill={setDeleteBill}
          />
        )} */}
    </section>
  );
};

export default Billings;
