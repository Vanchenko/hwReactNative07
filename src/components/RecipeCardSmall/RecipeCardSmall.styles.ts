import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  imageWrapper: {
    width: 156,
    height: 199,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  topBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  topBadgeText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  bottomMeta: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  bottomMetaText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

  title: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '800',
    color: '#222222',
    marginBottom: 10,
  },
});