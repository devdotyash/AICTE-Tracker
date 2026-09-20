#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/1e32dc4f2fa2e2da52ed756e72a4a311a5e153e8a5beb8107081ec4f8d26076d/contract';
import endContract from '../../snapshots/1e32dc4f2fa2e2da52ed756e72a4a311a5e153e8a5beb8107081ec4f8d26076d/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/829c6ebacc832dfa22f64b42b41aea7cbcf904286f48b99d1afaa06ce90d5158/contract';
import startContract from '../../snapshots/829c6ebacc832dfa22f64b42b41aea7cbcf904286f48b99d1afaa06ce90d5158/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, lit, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'club',
        columns: [
          col('branch', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('clubId', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('facebook', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('facultyInchargeId', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('instagram', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('linkedin', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('twitter', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('website', 'text', { codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['clubId'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'event',
        columns: [
          col('aicteHr', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('banner', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('brochure', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('date', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-temporal@1' } }),
          col('eventDescription', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('eventId', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('eventName', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('hostId', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('time', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('venue', 'text', { codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['eventId'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'ticket',
        columns: [
          col('date', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-temporal@1' } }),
          col('eventId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('eventName', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('hostId', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('ticketId', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('ticketType', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('time', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('tnpUid', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('userId', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('venue', 'text', { codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['ticketId'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'vault',
        columns: [
          col('eventId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('uniqueId', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('userId', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['uniqueId'])],
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('admissionYear', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('branch', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('div', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('firstName', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('graduationYear', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('gsuiteId', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('isExternal', 'bool', {
          notNull: true,
          default: lit(false),
          codecRef: { codecId: 'pg/bool@1' },
        }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('isHost', 'bool', {
          notNull: true,
          default: lit(false),
          codecRef: { codecId: 'pg/bool@1' },
        }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('lastName', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('memberOfClubId', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('rollNo', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('tndUid', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addUnique({
        schema: 'public',
        table: 'user',
        constraint: 'user_gsuiteId_key',
        columns: ['gsuiteId'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'user',
        constraint: 'user_tndUid_key',
        columns: ['tndUid'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'club',
        index: 'club_facultyInchargeId_idx_6a862bb4',
        columns: ['facultyInchargeId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'event',
        index: 'event_hostId_idx_05205577',
        columns: ['hostId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'ticket',
        index: 'ticket_eventId_idx_6a266d47',
        columns: ['eventId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'ticket',
        index: 'ticket_hostId_idx_05205577',
        columns: ['hostId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'ticket',
        index: 'ticket_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'user',
        index: 'user_memberOfClubId_idx_506e3a3b',
        columns: ['memberOfClubId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'vault',
        index: 'vault_eventId_idx_6a266d47',
        columns: ['eventId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'vault',
        index: 'vault_userId_idx_a489d58a',
        columns: ['userId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'club',
        foreignKey: {
          name: 'club_facultyInchargeId_fkey',
          columns: ['facultyInchargeId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'event',
        foreignKey: {
          name: 'event_hostId_fkey',
          columns: ['hostId'],
          references: { schema: 'public', table: 'club', columns: ['clubId'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'ticket',
        foreignKey: {
          name: 'ticket_hostId_fkey',
          columns: ['hostId'],
          references: { schema: 'public', table: 'club', columns: ['clubId'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'ticket',
        foreignKey: {
          name: 'ticket_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'ticket',
        foreignKey: {
          name: 'ticket_eventId_fkey',
          columns: ['eventId'],
          references: { schema: 'public', table: 'event', columns: ['eventId'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'user',
        foreignKey: {
          name: 'user_memberOfClubId_fkey',
          columns: ['memberOfClubId'],
          references: { schema: 'public', table: 'club', columns: ['clubId'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'vault',
        foreignKey: {
          name: 'vault_userId_fkey',
          columns: ['userId'],
          references: { schema: 'public', table: 'user', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'vault',
        foreignKey: {
          name: 'vault_eventId_fkey',
          columns: ['eventId'],
          references: { schema: 'public', table: 'event', columns: ['eventId'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
