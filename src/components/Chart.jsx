const Chart = ({ earned, owed }) => {
    const percent = owed > 0
        ? Math.min((earned / owed) * 100, 100)
        : 0;

    return (
        <div style={{ width: 500 }}>
            <div
                style={{
                    position: 'relative',
                    height: 50,
                    backgroundColor: '#0000004a',
                    overflow: 'hidden',
                    borderRadius: 4
                }}
            >
                <div
                    style={{
                        backgroundColor: '#015510',
                        width: `${percent}%`,
                        height: '100%'
                    }}
                />

                <label
                    style={{
                        position: 'absolute',
                        left: `${percent}%`,
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        whiteSpace: 'nowrap',
                        color: 'white',
                        fontWeight: 'bold'
                    }}
                >
                    ${earned}
                </label>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'white',
                    marginTop: 4,
                    fontSize: '0.9rem'
                }}
            >
                <span>$0</span>
                <span>${owed}</span>
            </div>
        </div>
    );
};

export default Chart;