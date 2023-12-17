import { AxiosError } from "axios";
import { SWRConfig } from "swr";
import React from "react";

const SWRProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SWRConfig
            value={{
                shouldRetryOnError: (err) => {
                    if (err instanceof AxiosError && err.response?.status === 401) {
                        return false;
                    }
                    return true;
                },
            }}
        >
            {children}
        </SWRConfig>
    );
};

export default SWRProvider;
