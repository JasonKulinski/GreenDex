import { Line } from "react-chartjs-2"
import { CategoryScale } from "chart.js"
import { Chart as ChartJS } from "chart.js/auto"
import {
    IonTitle,
    useIonViewWillEnter,
    useIonViewWillLeave,
} from "@ionic/react"
import { useEffect, useState } from "react"

const Graph = (props) => {
    useIonViewWillEnter(() => {
        ChartJS.register(CategoryScale)
    }, [])

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: "Billable Vs. Non Billable",
                backgroundColor: ["#36a2eb", "rgba(255,99,132,0.2)"],
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59],
            },
        ],
    })

    useEffect(() => {
        if (!props.company)
            return
        function compare(a, b) {
            if (a['Year'] < b['Year']) {
                return -1
            }
            if (a['Year'] > b['Year']) {
                return 1
            }
            return 0
        }
        const sortedImpacts = props.company?.data?._source[' Total GHG Environmental Impact (Scope 1, 2, 3)']?.sort(compare)
        console.log(sortedImpacts)
        setData({
            labels: [sortedImpacts[0].Year, sortedImpacts[sortedImpacts.length - 1].Year],
            datasets: [
                {
                    label: "Billable Vs. Non Billable",
                    backgroundColor: ["#36a2eb", "rgba(255,99,132,0.2)"],
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [65, 59],
                },
            ],
        })
    })

    useIonViewWillLeave(() => {
        ChartJS.unregister(CategoryScale)
    }, [])

    return (
        <>
            <IonTitle>Bar Example</IonTitle>
            <Line data={data} />
        </>
    )
}

export default Graph