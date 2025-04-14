
const SectionTitle = ({subHeading, heading}) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-yellow-600 mb-2 text-xl">---{subHeading}---</p>
        <h3 className="text-4xl uppercase border-y-4 border-gray-500 font-bold py-4">{heading}</h3>
    </div>
  )
}

export default SectionTitle