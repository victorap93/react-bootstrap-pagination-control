import React from 'react';
import { Pagination as RBPagination } from 'react-bootstrap';

export type PaginationControlProps = {
  page?: number,
  between?: number,
  total: number,
  limit: number,
  changePage?: (page: number) => any,
  next?: boolean,
  last?: boolean,
  ellipsis?: number
}

export const PaginationControl = ({
  page = 1,
  between = 3,
  total,
  limit,
  changePage = page => console.log(page),
  next = true,
  last = false,
  ellipsis = 0
}: PaginationControlProps) => {

  const total_pages = Math.ceil(total / limit)
  between = between < 1 ? 1 : between
  page = (page < 1 ? 1 : page > total_pages ? total_pages : page)
  ellipsis = ellipsis < 1 ? 0 : ellipsis + 2 >= between ? between - 2 : ellipsis

  let positions = Array.from({ length: total_pages }, (v, i) => {
    v
    return i
  })

  const qtd_pages = (between * 2) + 1
  const range = (
    total_pages <= qtd_pages
      // Show active without slice
      ? positions
      : page - 1 <= between
        // Show active in left
        ? positions.slice(0, qtd_pages - (ellipsis > 0 ? ellipsis + 1 : 0))
        : page + between >= total_pages
          // Show active in right
          ? positions.slice(total_pages - qtd_pages + (ellipsis > 0 ? ellipsis + 1 : 0), total_pages)
          // Show active in middle
          : positions.slice((page - 1) - (between - (ellipsis > 0 ? ellipsis + 1 : 0)), page + (between - (ellipsis > 0 ? ellipsis + 1 : 0)))
  )

  return (
    total !== null && total > 0
      ? <RBPagination className="justify-content-md-center">
        {
          last
          && <RBPagination.First
            onClick={() => page > 1 ? changePage(1) : {}}
            disabled={page <= 1} />
        }
        {
          next
          && <RBPagination.Prev
            onClick={() => page > 1 ? changePage(page - 1) : {}}
            disabled={page <= 1} />
        }
        {
          total_pages > (between * 2) + 1 && ellipsis > 0
          && positions.slice(0, page - 1 <= between ? 0 : ellipsis).map(value => {
            return <RBPagination.Item key={value}
              onClick={() => value !== page - 1 ? changePage(value + 1) : {}}>
              {value + 1}
            </RBPagination.Item>
          })
        }
        {
          // Show ellipsis when "page" is bigger than "between"
          total_pages > (between * 2) + 1 && ellipsis > 0 && page - 1 > between
          && <RBPagination.Ellipsis disabled />
        }
        {range.map(value => {
          return <RBPagination.Item active={value === page - 1}
            key={value}
            onClick={() => value !== page - 1 ? changePage(value + 1) : {}}>
            {value + 1}
          </RBPagination.Item>
        })}
        {
          // Show ellipsis when "page" is lower than "between"
          total_pages > (between * 2) + 1 && ellipsis > 0 && page < total_pages - between
          && <RBPagination.Ellipsis disabled />
        }
        {
          total_pages > (between * 2) + 1 && ellipsis > 0
          && positions.slice(page >= total_pages - between ? total_pages : total_pages - ellipsis, total_pages).map(value => {
            return <RBPagination.Item key={value}
              onClick={() => value !== page - 1 ? changePage(value + 1) : {}}>
              {value + 1}
            </RBPagination.Item>
          })
        }
        {
          next
          && <RBPagination.Next
            onClick={() => page < total_pages ? changePage(page + 1) : {}}
            disabled={page >= total_pages} />
        }
        {
          last
          && <RBPagination.Last
            onClick={() => page < total_pages ? changePage(total_pages) : {}}
            disabled={page >= total_pages} />
        }
      </RBPagination>
      : <></>
  )
}