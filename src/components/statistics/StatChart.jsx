import { Legend, Pie, PieChart, Tooltip } from "recharts";

export default function StatChart({ timeline }) {
    const counts = timeline.reduce((accumulator, currentValue) => {
        accumulator[currentValue.type] =
            (accumulator[currentValue.type] || 0) + 1;
        return accumulator;
    }, {});

    const data = [
        { name: "Call", value: counts.Call || 0, fill: "#244D3F" },
        { name: "Text", value: counts.Text || 0, fill: "#7E35E1" },
        { name: "Video", value: counts.Video || 0, fill: "#37A163" },
    ];
    return (
        <div className="flex justify-center">
            <PieChart
                style={{
                    width: "100%",
                    maxWidth: "340px",
                    maxHeight: "80vh",
                    aspectRatio: 1,
                }}
                responsive
            >
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    cornerRadius="10%"
                    fill="#8884d8"
                    paddingAngle={4}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Tooltip></Tooltip>
                <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{
                        fontSize: "14px",
                        paddingTop: "30px",
                    }}
                    formatter={(value) => (
                        <span className="text-light-gray mx-1 font-medium">
                            {value}
                        </span>
                    )}
                />
            </PieChart>
        </div>
    );
}
