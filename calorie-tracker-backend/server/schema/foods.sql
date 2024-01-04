DROP TABLE IF EXISTS public.foods;

CREATE TABLE IF NOT EXISTS public.foods
(
    item_id integer NOT NULL DEFAULT nextval('fair_market_value_item_id_seq'::regclass),
    item_name character varying(200) COLLATE pg_catalog."default" NOT NULL,
    serving_size integer NOT NULL,
    serving_size_type character varying(100) COLLATE pg_catalog."default" NOT NULL,
    total_calories integer,
    fat integer,
    carbs integer,
    protein integer,
    CONSTRAINT foods_pkey PRIMARY KEY (item_id)
)