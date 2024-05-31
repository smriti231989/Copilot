import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event, context) => {
    try {
        const { user, username } = event.body;

        const validationResponse = validate(user);
        if (validationResponse) {
            return validationResponse;
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Success' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};

const validate = (user: any) => {
    if (!user || typeof user !== 'string') {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid user field' }),
        };
    }
};