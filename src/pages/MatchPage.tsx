import { Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import groups from '../data';

interface SpecRow {
  key: string;
  specName: string;
  specKey: string;
}

interface MatchPageProps {
  groupKey: string;
  matchKey: string;
}

export default function MatchPage({ groupKey, matchKey }: MatchPageProps) {
  const group = groups.find((g) => g.key === groupKey);
  const match = group?.matches?.find((m) => m.key === matchKey);

  if (!group || !match) {
    return (
      <Typography.Title level={3} type="danger">
        Not found
      </Typography.Title>
    );
  }

  const specs = match.specs ?? [];
  const candidates = match.candidates ?? [];

  const rows: SpecRow[] = specs.map((spec) => ({
    key: spec.key,
    specName: spec.name,
    specKey: spec.key,
  }));

  const columns: ColumnsType<SpecRow> = [
    {
      title: 'Spec',
      dataIndex: 'specName',
      key: 'specName',
      fixed: 'left',
      width: 260,
    },
    ...candidates.map((candidate) => ({
      title: candidate.version ? `${candidate.name} (${candidate.version})` : candidate.name,
      key: candidate.key,
      render: (_value: unknown, row: SpecRow) => {
        const result = candidate.results?.find((item) => item.key === row.specKey);
        if (!result) {
          return <Typography.Text type="secondary">-</Typography.Text>;
        }
        return (
          <>
            <div>{result.value.toLocaleString()}</div>
            <Typography.Text type="secondary">
              Score: {typeof result.score === 'number' ? (result.score * 100).toFixed(0) : '-'}
            </Typography.Text>
          </>
        );
      },
    })),
  ];

  return (
    <>
      <Typography.Title level={2}>{match.name}</Typography.Title>
      <Typography.Text type="secondary">{group.name}</Typography.Text>
      <Table<SpecRow>
        style={{ marginTop: 20 }}
        bordered
        pagination={false}
        scroll={{ x: 'max-content' }}
        columns={columns}
        dataSource={rows}
        locale={{ emptyText: 'No specs configured for this match yet.' }}
      />
    </>
  );
}
