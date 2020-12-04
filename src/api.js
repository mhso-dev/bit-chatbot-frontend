// axios 설정
// api 제작

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const chatApi = {
  sendMessage: async (sentence_q) => {
    // 자바스크립트에서 FormData 만들기
    const form = new FormData();
    form.append("sentence_q", sentence_q);

    const response = await api.post("/user_query", form);
    const response_message = response.data["result"];
    return response_message;
  },
};
