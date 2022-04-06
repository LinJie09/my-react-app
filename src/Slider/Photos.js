const Photos = ({ newObj, newindex, newslideIndex }) => {
  return (
    <div
      key={newObj.id}
      className={newslideIndex === newindex + 1 ? "slide active-anim" : "slide"}
    >
      <img src={process.env.PUBLIC_URL + `/Imgs/img${newindex + 1}.jpg`} />
    </div>
  );
};
export default Photos;
