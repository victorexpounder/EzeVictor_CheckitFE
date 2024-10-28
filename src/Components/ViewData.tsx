import React from 'react'

interface capsulev {
    capsule_id : string,
    capsule_serial: string,
    status: string,
    original_launch: Date| string | number,
    type: string,
    details: string,
    landings: number
}

interface Props {
    selectedCapsule : capsulev | null
}

const ViewData = (props: Props) => {
    const {selectedCapsule} = props

    return (
        <div className="">
            <div className="">
                {/* Mapping through the capsule data */}
                <div className="space-y-4  ">
                    <div>
                        <h3 className="font-semibold">Capsule_id</h3>
                        <p>{selectedCapsule?.capsule_id}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Capsule Serial:</h3>
                        <p>{selectedCapsule?.capsule_serial}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Details</h3>
                        <p>{selectedCapsule?.details}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Landings</h3>
                        <p>{selectedCapsule?.landings}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Status:</h3>
                        <p>{selectedCapsule?.status}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Original Launch:</h3>
                        <p>{new Date(selectedCapsule?.original_launch).toLocaleDateString()}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Type:</h3>
                        <p>{selectedCapsule?.type}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewData
