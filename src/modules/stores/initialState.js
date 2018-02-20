import {RESPONSE_STATUS} from "../../constants/actions";

export default {
  router: {},
  entities: {
      bookshelves: {
          ids: [],
          data: {}
      },
      books: {}
  },
    requestData: {
        inProgress: false,
        successMessage: "",
        errorMessage: "",
        status: RESPONSE_STATUS.SUCCESS
    }
};
