const AddPorto = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div>React DropZone</div>
        <input type="text" placeholder="Nama Portfolio" />
        <textarea
          name="porto-desc"
          cols="30"
          rows="10"
          placeholder="Deskripsi Portfolio"
        />
      </div>
    </div>
  );
};

export default AddPorto;
