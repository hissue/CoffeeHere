import { useEffect } from "react"

const MockSamples = () => {
  useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then(console.log)
    fetch("/products")
      .then((res) => res.json())
      .then(console.log)
    fetch("/coupons")
      .then((res) => res.json())
      .then(console.log)
  }, [])

  return <div> (MockSample) console.log 를 확인하세요. </div>
}

export default MockSamples
