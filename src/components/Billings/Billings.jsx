const Billings = () => {
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
          <tr>
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
              <Table key={bill._id} bill={bill} setDeleteBill={setDeleteBill} />
            ))} */}
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
