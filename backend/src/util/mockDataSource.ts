/* eslint-disable */

import { type DataSource } from 'typeorm'

// @ts-expect-error Used for testing, using hacks
export const dataSourceMockFactory: () => MockType<DataSource> = jest.fn(
  () => ({
    findOneBy: jest.fn((entity) => entity),
    findOne: jest.fn((entity) => entity),
    save: jest.fn((entity) => entity),
  })
)

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>
}
