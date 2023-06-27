const InfoPopUp = ({ info, id, }) => {

  return (
    <div
      id={`Pop-${id}`}
      className="popup-closed rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
    >
      <div className="flex items-start gap-1">
        <div className="flex-1">
          <p className="mt-1 text-sm text-gray-600">
            { info }
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoPopUp;