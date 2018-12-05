export default (props) => (
    <div className="width-full d-flex overflow-hidden">
        <div className="d-flex width-infinity">
            {...props}
        </div>
        <style jsx>{`
            .width-full {
                width: 100%;
            }
            .d-flex {
                display: flex;
            }
            .overflow-hidden {
                overflow: hidden;
            }
        `}
        </style>
    </div>
); 
