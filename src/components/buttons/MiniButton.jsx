const MiniButton = ({label}) => {
  return (
    <>
        <button className="bg-primmary-blue text-white font-semibold rounded-md shadow-sm py-8px px-16px relative">
            {label}
        </button>
    </>
  )
}

export default MiniButton