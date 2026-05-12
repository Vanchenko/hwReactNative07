import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 8,
    height: 188,
  },

  imageWrapper: {
    width: 128,
    height: 172,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 12,
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

  bottomMetaDivider: {
    color: '#FFFFFF',
    fontSize: 14,
  },

  content: {
    flex: 1,
    paddingTop: 6,
    paddingRight: 6,
    paddingLeft: 6,
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '800',
    color: '#222222',
    marginBottom: 10,
  },

  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 19,
    marginRight: 10,
  },

  authorContent: {
    justifyContent: 'center',
    gap: 5,
    flexShrink: 1,
  },

  authorName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8A8A8A',
  },

  ratingBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E7F000',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  ratingBadgeText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '600',
  },

  description: {
    fontSize: 13,
    lineHeight: 19,
    color: '#555555',
    paddingRight: 8,
  },

  actionButton: {
    position: 'absolute',
    right: -9,
    bottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: 4,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#D9D9D9',
  },

  actionButtonInner: {
    width: 36,
    height: 36,
    borderRadius: 7,
    backgroundColor: '#FF6B3D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});