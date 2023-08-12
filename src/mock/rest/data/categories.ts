import { payhereCategories } from "../../common"

const categoriesData = {
  uri: "/categories",
  handleResponse: () => {
    const data = payhereCategories

    return {
      data,
    }
  },
}

export default categoriesData
