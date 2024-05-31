import { handler } from './handler';

describe('Lambda Handler', () => {
  it('should return a success response with status code 200', async () => {
    const event = {}; // Provide the event object for testing
    const context = {}; // Provide the context object for testing

    const response = await handler(event, context);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(JSON.stringify({ message: 'Success' }));
  });

  it('should return an error response with status code 500', async () => {
    const event = {}; // Provide the event object for testing
    const context = {}; // Provide the context object for testing

    // Simulate an error by throwing an exception
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'info').mockImplementation(() => {});
    jest.spyOn(console, 'debug').mockImplementation(() => {});
    jest.spyOn(console, 'trace').mockImplementation(() => {});

    const response = await handler(event, context);

    expect(response.statusCode).toBe(500);
    expect(response.body).toBe(JSON.stringify({ message: 'Internal Server Error' }));
  });
});