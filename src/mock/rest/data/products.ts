import { payhereProducts } from "../../common"

const productsData = {
  uri: "/products",
  handleResponse: () => {
    const data = payhereProducts

    return {
      data,
    }
  },
}

export default productsData
