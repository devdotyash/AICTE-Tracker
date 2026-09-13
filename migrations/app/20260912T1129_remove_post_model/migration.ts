#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/829c6ebacc832dfa22f64b42b41aea7cbcf904286f48b99d1afaa06ce90d5158/contract';
import endContract from '../../snapshots/829c6ebacc832dfa22f64b42b41aea7cbcf904286f48b99d1afaa06ce90d5158/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/c17f1a78482f4bb8b61024a2bf4e08094b1ff2d3762257a10c14e1e02a339dd6/contract';
import startContract from '../../snapshots/c17f1a78482f4bb8b61024a2bf4e08094b1ff2d3762257a10c14e1e02a339dd6/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [this.dropTable({ schema: 'public', table: 'post' })];
  }
}

MigrationCLI.run(import.meta.url, M);
