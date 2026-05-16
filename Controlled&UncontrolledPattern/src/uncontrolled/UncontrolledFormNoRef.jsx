const UncontrolledFormNoRef = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    alert(`Hello ${data.username}, your email is ${data.email}`);
  };
  return (
    <form
      className="flex flex-col justify-center items-center border-2 border-red-500"
      onSubmit={handleSubmit}
    >
      <h1>UNCONROLLED NO REF</h1>
      <input
        className="border rounded-2xl p-2 my-3"
        name="username"
        placeholder="Username"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        name="email"
        type="email"
        placeholder="Email"
      />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UncontrolledFormNoRef;
