const BASE_URL = process.env.REACT_BASE_URL;

export const API_ENDPOINTS = {
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/register`,
    RESOLVECHAT: `${BASE_URL}/resolve-chat`,
    CHATSTATISTICS: `${BASE_URL}/chat-statistics`,
    SYSTEMPERFORMANCE: `${BASE_URL}/system-performance`,
    CHATREQUEST: `${BASE_URL}/chat`,
};