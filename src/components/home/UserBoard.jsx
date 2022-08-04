const UserBoard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <img src={data.user.img} alt="#" className="rounded-md h-24 w-20 absolute -mt-1" />
      <div>
        <h1 className="text-2xl text-primary font-bold text-center">Bonjour</h1>
        <h2 className="text-primary font-bold text-center text-3xl">
          {data.user.name} {data.user.lastName}
        </h2>
        <h3 className="text-primary font-bold text-center ">Rôle : {data.user.role}</h3>
      </div>
    </div>
  );
};

export default UserBoard;
