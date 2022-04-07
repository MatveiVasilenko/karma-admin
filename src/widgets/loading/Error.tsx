import { FC } from "react"

interface ErrorProps {
    error?: string;
}

const Error:FC<ErrorProps> = ({
    error = 'Ошибка загрузки данных'
}) => {
    return (
        <div>{error}</div>
    )
}
export default Error