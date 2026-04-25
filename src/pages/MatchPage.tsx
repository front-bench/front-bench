import { Typography } from 'antd';
import groups from '../data';

interface MatchPageProps {
  groupSlug: string;
  matchSlug: string;
}

export default function MatchPage({ groupSlug, matchSlug }: MatchPageProps) {
  const group = groups.find((g) => g.slug === groupSlug);
  const match = group?.matches?.find((m) => m.slug === matchSlug);

  if (!group || !match) {
    return (
      <Typography.Title level={3} type="danger">
        Not found
      </Typography.Title>
    );
  }

  return (
    <>
      <Typography.Title level={2}>{match.name}</Typography.Title>
      <Typography.Text type="secondary">{group.name}</Typography.Text>
    </>
  );
}
