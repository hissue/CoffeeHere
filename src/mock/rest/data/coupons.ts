import { payhereCoupons } from "../../common"

const couponsData = {
  uri: "/coupons",
  handleResponse: () => {
    const data = payhereCoupons

    return {
      data,
    }
  },
}

export default couponsData
