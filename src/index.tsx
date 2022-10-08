import React from 'react';
import { Pagination as RBPagination } from 'react-bootstrap';

export type PaginationProps = {
  page: number,
  between: number,
  total: number,
  limit: number,
  changePage?: Function,
  next?: boolean,
  last?: boolean,
  ellipsis?: boolean,
  between_elipsis?: number
}

export const Pagination: React.FC<PaginationProps> = ({ page = 1, between = 3, total, limit, changePage, next = true, last = false, ellipsis = false, between_elipsis = 2 }: PaginationProps) => {

  const total_pages = Math.ceil(total / limit)

  let positions = Array.from({ length: total_pages }, (v, i) => {
    v
    return i
  })

  const qtd_pages = (between * 2) + 1
  const range = (total_pages <= qtd_pages
    // Show active without slice
    ? positions
    : page <= between
      // Show active in left
      ? positions.slice(0, qtd_pages)
      : page + between >= total_pages
        // Show active in right
        ? positions.slice(total_pages - qtd_pages, total_pages)
        // Show active in middle
        : positions.slice((page - 1) - between, page + between)
  )

  return (
    total !== null && total > 0
      ? <RBPagination className="justify-content-md-center">
        {
          last
          && <RBPagination.First
            onClick={() => changePage && page > 1 ? changePage(1) : {}}
            disabled={page <= 1} />
        }
        {
          next
          && <RBPagination.Prev
            onClick={() => changePage && page > 1 ? changePage(page - 1) : {}}
            disabled={page <= 1} />
        }
        {
          ellipsis
          && positions.slice(
            0,
            between_elipsis < page - 1 - between
              ? between_elipsis
              : page - 1 - between > 0 ? page - 1 - between : 0
          ).map((value, index) => {
            return <RBPagination.Item key={index}
              onClick={() => changePage && value !== page - 1 ? changePage(value + 1) : {}}>
              {value + 1}
            </RBPagination.Item>
          })
        }
        {
          ellipsis && between_elipsis > 0 && page - 1 > between + between_elipsis
          && <RBPagination.Ellipsis disabled />
        }
        {range.map((value, index) => {
          return <RBPagination.Item active={
            // Current page
            value === page - 1
            // Smaller than smallest page
            || (page < 1 && value === 0)
            // Bigger than biggest page
            || (page > total_pages && value === total_pages - 1)}
            key={index}
            onClick={() => changePage && value !== page - 1 ? changePage(value + 1) : {}}>
            {value + 1}
          </RBPagination.Item>
        })}
        {
          ellipsis && between_elipsis > 0 && page < total_pages - between - between_elipsis
          && <RBPagination.Ellipsis disabled />
        }
        {
          ellipsis
          && positions.slice(
            page + between <= total_pages - between_elipsis
              ? total_pages - between_elipsis
              : total_pages - (total_pages - (page + between)),
            total_pages
          ).map((value, index) => {
            return <RBPagination.Item key={index}
              onClick={() => changePage && value !== page - 1 ? changePage(value + 1) : {}}>
              {value + 1}
            </RBPagination.Item>
          })
        }
        {
          next
          && <RBPagination.Next
            onClick={() => changePage && page < total_pages ? changePage(page + 1) : {}}
            disabled={page >= total_pages} />
        }
        {
          last
          && <RBPagination.Last
            onClick={() => changePage && page < total_pages ? changePage(total_pages) : {}}
            disabled={page >= total_pages} />
        }
      </RBPagination>
      : <></>
  )
}