import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        if (!currency) return
        const url = `https://latest.currency-api.pages.dev/v1/currencies/${currency.toLowerCase()}.json`
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP Error: ${res.status}`)
                }
                return res.json()
            })
            .then((res) => {
                console.log("API DATA:", res)

                setData(res[currency.toLowerCase()] || {})
            })
            .catch((error) => {
                console.error("API Error:", error)
                setData({})
            })
    }, [currency])
    return data
}

export default useCurrencyInfo