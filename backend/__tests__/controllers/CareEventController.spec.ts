import app from '../../src/application';
import { birdieDB } from '../../src/db/BirdieDB';
import * as request from 'supertest';
import * as mockDB from 'mock-knex';

describe('test', () => {
  let tracker: mockDB.Tracker;
  const mockCareEvents = {
    id: '123456',
    visit_id: '1234',
    caregiver_id: '1234222',
    care_recipient_id: '3333333',
  };

  beforeAll(() => {
    mockDB.mock(birdieDB);
    tracker = mockDB.getTracker();
  });

  beforeEach(() => {
    tracker.install();
    tracker.on('query', (query) => query.response(mockCareEvents));
  });

  afterEach(() => {
    tracker.uninstall();
  });

  afterAll(() => birdieDB.destroy());

  test('should call return care events by visit id', async () => {
    await request(app).get('/careEvent/visit/1234');
    const query = tracker.queries.first();
    expect(query.sql).toEqual('select * from events where visit_id = ?');
    expect(query.bindings[0]).toEqual('1234');
  });

  test('should return care events by care giver id', async () => {
    await request(app).get('/careEvent/careGiver/1234222');
    const query = tracker.queries.first();
    expect(query.sql).toEqual('select * from events where caregiver_id = ?');
    expect(query.bindings[0]).toEqual('1234222');
  });

  test('should return care events by care recipient id', async () => {
    await request(app).get('/careEvent/careRecipient/555555');
    const query = tracker.queries.first();
    expect(query.sql).toEqual(
      'select * from events where care_recipient_id = ? order by timestamp asc'
    );
    expect(query.bindings[0]).toEqual('555555');
  });
});
